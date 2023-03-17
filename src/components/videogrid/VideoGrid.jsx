import React, { useState, useEffect } from 'react';
import ContentCard from '../content-card/ContentCard';
import contentList from "../../assets/JsonData/content-data.json";
import { Button } from 'antd';


const VideoGrid = props => {

    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);

    useEffect(() => {
        const getList = async () => {
            setItems(contentList.slice(0, 8));
            setTotalPage(Math.ceil(contentList.length / 8));
        }
        getList();
    }, [props.tagid]);

    const loadMore = async () => {
        let itemmore = null;
        let newpage = page + 1;
        itemmore = contentList.slice((newpage - 1) * 8, newpage * 8 - 1);
        setItems([...items, ...itemmore]);
        setPage(newpage);
    }

    return (
        <div>
            <div className="card__body">
                <div className="row">
                    {items.map((item, index) => (
                        <div className="col-3 col-md-6 col-sm-12" key={index}>
                            <ContentCard
                                id={item.id}
                                channel={item.channel}
                                title={item.title}
                                url={item.url}
                                content={item.content}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {
                page < totalPage ? (
                    <div className="movie-grid__loadmore">
                        <Button className=" btn" onClick={loadMore}>Load more</Button>
                    </div>
                ) : null
            }
        </div>
    );
}


export default VideoGrid;
