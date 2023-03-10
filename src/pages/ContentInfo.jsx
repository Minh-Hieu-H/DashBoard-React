import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Badge from "../components/badge/Badge";

import './Pages.css'
import videoList from '../assets/JsonData/content-data.json'

const ContentInfo = () => {
    const {videoid} = useParams();
    const [videoDetail, setVideoDetail] = useState({});
    useEffect(() => {
        const getDetail = async () => {
            setVideoDetail(videoList.find(video => video.id.toString() === videoid));
        }
        getDetail();
    }, []);
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <h2 className="tag-span">Content Details:</h2>
                        </div>
                        <div className="card__body card__body-p">
                            <p className="text-bold">Content ID: <span className="text-bold tag-span">{videoDetail.id}</span></p>
                            <div style={{display: "flex"}}><p style={{padding: "5px 0", marginBottom: "0", marginRight: "5px"}} className="text-bold">Type: </p><Badge className="text-bold" type={"danger"} clickable={"none"} content={"Youtube video"}/></div>
                            <p className="text-bold">Content Name: <span className="text-bold tag-span">Tổng thống Ukraine nói Nga đang chuẩn bị cho việc sử dụng vũ khí hạt nhân - BBC News Tiếng Việt</span></p>
                            <p className="text-bold">URL: <span className="text-bold tag-span"><a href={videoDetail.url}>{videoDetail.url}</a></span></p>
                            <div style={{display: "flex"}}><p style={{padding: "5px 0", marginRight: "5px"}} className="text-bold">Tags: </p><Badge className="text-bold mr-0-5" type={"main"} content={"Ukraine"}/><Badge className="text-bold" type={"main"} content={"Nga"}/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header tag-span">
                            <p style={{"fontSize":"20px"}}>Video:</p>
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}} className="card__body">
                            <iframe width="942" height="530" src="https://www.youtube.com/embed/K4fGcCJjvkw" title="Tổng thống Ukraine nói Nga đang chuẩn bị cho việc sử dụng vũ khí hạt nhân - BBC News Tiếng Việt" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header tag-span">
                            <p style={{"fontSize":"20px"}}>Scanned Contents:</p>
                        </div>
                        <div className="card__body">
                            <p className="text-content">{videoDetail.content}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentInfo;
