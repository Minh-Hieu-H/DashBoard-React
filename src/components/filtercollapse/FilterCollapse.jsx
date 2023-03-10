import React from "react";
import "./filtercollapse.css";

const FilterCollapse = ({ data }) => {

    return (
        <div className="filtercollapse">
            {data.map((groupList, index) => (
                <div className="filtercollapse__group">
                    <div className="filtercollapse__grouptitle">
                        {groupList.group}
                    </div>
                    <div className="filtercollapse__groupdata">
                        {groupList.options.map((item, index) => (
                            <div className="filtercollapse__item">{item.text}</div>
                        ))}

                    </div>
                </div>
            ))}
        </div>
    )
}

export default FilterCollapse;