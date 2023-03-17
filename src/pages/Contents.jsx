import React, { useState } from "react";
import TagGrid from "../components/videogrid/VideoGrid";
import Search from "../components/search/Search";

import './Pages.css'
import 'antd/dist/antd.css';
import FilterButton from "../components/filterbutton/FilterButton";
import filterList from "../assets/JsonData/filter-data.json";
import FilterCollapse from "../components/filtercollapse/FilterCollapse";


const Contents = () => {
    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [searchKey, setSearchKey] = useState("");
    const handleClickFilter = () => {
      setIsOpenFilter(!isOpenFilter);
      console.log(isOpenFilter)
    };
    const handleChangeKey = (value) => {
      setSearchKey(value);
    };
    return (
        <>
            <div className="mb-20 justify-div">
                <Search search={searchKey} handleChangeKey={handleChangeKey}/>
                <FilterButton handleClick={handleClickFilter}/>
            </div>
            {isOpenFilter && <FilterCollapse data={filterList}/>}
            <div>
                <TagGrid/>
            </div>
        </>
    );
};

export default Contents;
