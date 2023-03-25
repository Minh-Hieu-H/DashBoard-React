import { useState, useEffect } from "react";

import VideoGrid from "../components/videogrid/VideoGrid";
import Search from "../components/search/Search";

import tagList from "../assets/JsonData/tag-data.json";
import "./Pages.css";
import "antd/dist/antd.css";
import { useHistory } from "react-router-dom";

const EventStream = () => {
  const [searchKey, setSearchKey] = useState("");

  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      setItems(tagList);
    };
    getList();
  }, []);

  const handleChangeKey = (value) => {
    setSearchKey(value);
  };

  const history = useHistory();

  const viewDetails = (id) => history.push("/tag/" + id);

  return (
    <>
      <div className="mb-36 justify-div">
        <Search
          search={searchKey}
          handleChangeKey={handleChangeKey}
          placeholder={"Search Tag Here ..."}
        />
      </div>
      {items.map((item, index) => (
        <div key={index}>
          <div className="tag-btn__line">
            <button
              className="btn btn-add"
              onClick={() => viewDetails(item.id)}
            >
              <i className="bx bx-fast-forward"></i>
              {item.name}
            </button>
          </div>
          <VideoGrid limit={4} />
        </div>
      ))}
    </>
  );
};

export default EventStream;
