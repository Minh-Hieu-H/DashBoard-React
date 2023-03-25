import { useState, useEffect } from "react";

import ContentCard from "../content-card/ContentCard";
import Button from "../button/Button";

import contentList from "../../assets/JsonData/content-data.json";

const VideoGrid = (props) => {
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);

  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const getList = async () => {
      setItems(contentList.slice(0, props.limit));
      setTotalPage(Math.ceil(contentList.length / props.limit));
    };
    getList();
  }, [props.limit]);

  const loadMore = async () => {
    let itemmore = null;
    let newpage = page + 1;
    itemmore = contentList.slice(
      (newpage - 1) * props.limit,
      newpage * props.limit
    );
    setItems([...items, ...itemmore]);
    setPage(newpage);
  };

  return (
    <div>
      <div className="card__body">
        <div className="row">
          {items.map((item, index) => (
            <div className="col-3 col-md-6 col-sm-12" key={index}>
              <ContentCard
                id={item._id}
                channel={item.video_channel}
                title={item.video_title}
                url={item.video_link}
                content={item.video_content}
                type={item.video_type}
              />
            </div>
          ))}
        </div>
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore card__footer">
          <Button className=" btn" onClick={loadMore}>
            Load more
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default VideoGrid;
