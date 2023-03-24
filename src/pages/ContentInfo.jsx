import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Badge from "../components/badge/Badge";
import CardNote from "../components/card-note/CardNote";

import videoList from "../assets/JsonData/content-data.json";
import "./Pages.css";

const ContentInfo = () => {
  const { videoid } = useParams();

  const [videoDetail, setVideoDetail] = useState({});

  useEffect(() => {
    const getDetail = () => {
      setVideoDetail(
        videoList.find((video) => video._id.toString() === videoid)
      );
    };
    getDetail();
  }, [videoid]);

  return (
    <div>
      <p className="section__header page-header">Video Details</p>
      <div className="col-12">
        <div className="card row video-details__card">
          <div className="card__body card__body-p">
            <p className="text-bold">
              Title:{" "}
              <span className="text-bold tag-span">
                {videoDetail.video_title}
              </span>
            </p>
            <p className="text-bold">
              Channel:{" "}
              <span className="text-bold tag-span">
                {videoDetail.video_channel}
              </span>
            </p>
            <p className="text-bold">
              Published Date:{" "}
              <span className="text-bold tag-span">
                {videoDetail.video_publishAt}
              </span>
            </p>
            <div className="badge-div">
              <p className=" text-bold badge-line">Type: </p>
              <Badge
                className="text-bold"
                type={
                  videoDetail.video_type === 0
                    ? "primary"
                    : videoDetail.video_type === 1
                    ? "success"
                    : "danger"
                }
                clickable={"none"}
                content={
                  videoDetail.video_type === 2
                    ? "Tiêu cực"
                    : videoDetail.video_type === 1
                    ? "Tích cực"
                    : "Trung tính"
                }
              />
            </div>
            {/* <p className="text-bold">
              Description:{" "}
              <span className="text-bold tag-span">
                {videoDetail.video_description}
              </span>
            </p> */}
            <p className="text-bold">
              Reactive Number:{" "}
              <span className="text-bold tag-span">
                <a href={videoDetail.video_link}>
                  {videoDetail.react + videoDetail.comments}
                </a>
              </span>
            </p>
            <div className="badge-div mb-1">
              <p className="badge-line text-bold">Tags: </p>
              <Badge
                className="text-bold mr-0-5"
                type={"primary"}
                content={"Ukraine"}
              />
              <Badge className="text-bold" type={"primary"} content={"Nga"} />
            </div>
            <div className="row gap-20">
              {videoDetail.followed === false ? (
                <button className="btn btn-view btn-gotovideo">
                  <i className="bx bx-fast-forward"></i>
                  Follow
                </button>
              ) : (
                <button className="btn btn-delete btn-gotovideo">
                  <i className="bx bx-user-x"></i>
                  Unfollow
                </button>
              )}
              <a href={videoDetail.video_link} target="_blank" rel="noreferrer">
                <button className="btn btn-view btn-gotovideo">
                  <i className="bx bx-fast-forward"></i>
                  Go to Video
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card__header">
          <p>Embed Video</p>
        </div>
        <div className="card row flex-center">
          <div className="card__body">
            <iframe
              width="942"
              height="530"
              src={videoDetail.embed_link}
              title={videoDetail.video_title}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="card__header">
          <p>Information Extraction</p>
        </div>
        <div className="card row">
          <div className="card__body">
            <CardNote />
            <p
              className="text-content"
              dangerouslySetInnerHTML={{ __html: videoDetail.video_content }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentInfo;
