import { useState } from "react";

import VideoGrid from "../components/videogrid/VideoGrid";
import Search from "../components/search/Search";
import { Select } from "antd";

import "./Pages.css";
import "antd/dist/antd.css";

const { Option } = Select;

const handleChange = (value) => {
  console.log(`Selected ${value}`);
};

const Contents = () => {
  const [searchKey, setSearchKey] = useState("");

  const handleChangeKey = (value) => {
    setSearchKey(value);
  };

  return (
    <>
      <div className="mb-36 justify-div align-center">
        <Search
          search={searchKey}
          handleChangeKey={handleChangeKey}
          placeholder={"Search Here ..."}
        />
        <Select
          className="selectFilter"
          defaultValue="reactiveAll"
          onChange={handleChange}
          dropdownStyle={{ fontSize: 16, padding: 0 }}
        >
          <Option value="reactiveAll" className="option-padding">
            All Videos
          </Option>
          <Option value="reactive1" className="option-padding">
            Tin tiêu cực
          </Option>
          <Option value="reactive2" className="option-padding">
            Tương tác ít
          </Option>
        </Select>
      </div>
      <div>
        <VideoGrid limit={8} />
      </div>
    </>
  );
};

export default Contents;
