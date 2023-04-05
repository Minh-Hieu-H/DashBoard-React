import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";

import StatusCard from "../components/status-card/StatusCard";
import Table from "../components/table/Table";
import Button from "../components/button/Button";

import statusCards from "../assets/JsonData/status-card-data.json";
import last7Tag from "../assets/JsonData/last-7-tag.json";
import last7Reactive from "../assets/JsonData/last-7-reactive.json";
import "./Pages.css";
import { useDispatch, useSelector } from "react-redux";
import { getTopNegVideo } from "../redux/actions/VideoAction";

const topTags = {
  head: ["tag name", "scanned videos"],
  body: [
    {
      name: "Covid",
      scanned: 761,
    },
    {
      name: "Dân chủ",
      scanned: 504,
    },
    {
      name: "Ukraine",
      scanned: 481,
    },
    {
      name: "Biểu tình",
      scanned: 162,
    },
    {
      name: "Trung Quốc",
      scanned: 98,
    },
  ],
};

const renderTagHead = (item, index) => <th key={index}>{item}</th>;

const renderTagBody = (item, index) => (
  <tr key={index}>
    <td>{item.name}</td>
    <td>{item.scanned}</td>
  </tr>
);

const topSources = {
  header: ["source name", "scanned videos", "source link"],
  body: [
    {
      name: "VTV24",
      scanned: "7.101",
      url: "https://www.youtube.com/c/vtv24",
    },
    {
      name: "Việt Tân",
      scanned: "2.896",
      url: "https://www.youtube.com/c/VietTan",
    },
    {
      name: "RFA Tiếng Việt",
      scanned: "1.196",
      url: "https://www.youtube.com/user/RFAVietnamese",
    },
    {
      name: "BBC News Tiếng Việt",
      scanned: "1.196",
      url: "https://www.youtube.com/c/bbctiengviet",
    },
    {
      name: "TRÍ TUỆ TỎA SÁNG",
      scanned: "652",
      url: "https://www.facebook.com/hocvienkythuat",
    },
  ],
};

const renderSourceHead = (item, index) => <th key={index}>{item}</th>;

const renderSourceBody = (item, index) => (
  <tr key={index}>
    <td>{item.name}</td>
    <td>{item.scanned}</td>
    <td>
      <a href={item.url}>{item.url}</a>
    </td>
  </tr>
);

const Dashboard = () => {
  const dispatch = useDispatch();

  const [tagScanneds, setTagScanneds] = useState([]);

  const [tagNames, setTagNames] = useState([]);

  const [sourceNames, setSourceNames] = useState([]);

  const [sourceScanneds, setSourceScanneds] = useState([]);

  const topNegVideoState = useSelector((state) => state.videoList);
  const {
    loading: loadingTopNeg,
    error: errorLoadTopNeg,
    success: successLoadTopNeg,
  } = topNegVideoState;

  useEffect(() => {
    // if (loadingTopNeg) {
    //   dispatch({ type: "VIDEO_LIST_REQUEST" });
    // }
    // if (successLoadTopNeg) {
    //   dispatch(getTopNegVideo(), { type: "VIDEO_LIST_SUCCESS" });
    // }
    // if (errorLoadTopNeg) {
    //   dispatch({ type: "VIDEO_LIST_FAIL" });
    // }
    console.log(topNegVideoState)
    let tagscanned_list = successLoadTopNeg;
    let tagname_list = [];
    let sourcescanned_list = [];
    let sourcename_list = [];

    last7Reactive.forEach((source) => {
      sourcescanned_list = [...sourcescanned_list, source["count"]];
      sourcename_list = [...sourcename_list, source["weekday"]];
    });
    setTagScanneds(tagscanned_list); //////
    setTagNames(tagname_list);
    setSourceScanneds(sourcescanned_list);
    setSourceNames(sourcename_list);
  }, [dispatch, loadingTopNeg, successLoadTopNeg, errorLoadTopNeg]);

  const chartOption = {
    options: {
      plotOptions: {
        bar: {
          borderRadius: 10,
          horizontal: true,
        },
      },
    },
  };

  return (
    <div id="dashboard">
      <p className="section__header">Top Active Channels</p>
      <div className="row">
        {statusCards.map((item, index) => (
          <div className="col-3 col-md-6 col-sm-12" key={index}>
            <StatusCard
              id={item.id}
              title={item.title}
              count={item.count}
              new={item.new}
            />
          </div>
        ))}
      </div>
      <p className="section__header">Statistics</p>

      <div className="row stretch__item">
        <div className="col-6 col-md-12">
          <div className="card card__dashboard">
            <div className="card__header">
              <p>Top Sources</p>
            </div>
            <div className="card__body">
              <Table
                headerData={topSources.header}
                bodyData={topSources.body}
                renderHeader={(item, index) => renderSourceHead(item, index)}
                renderBody={(item, index) => renderSourceBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/source">
                <Button>View All</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-12">
          <div className="card card__dashboard">
            <div className="card__header">
              <p>Top Unfollowed Sources</p>
            </div>
            <Chart
              options={{ labels: sourceNames, ...chartOption.options }}
              series={[
                {
                  name: "Reactive by Source",
                  data: sourceScanneds,
                  type: "bar",
                },
              ]}
              type="bar"
            />
          </div>
        </div>
      </div>

      <p className="section__header mt-2"></p>
      <div className="row stretch__item">
        <div className="col-6 col-md-12">
          <div className="card card__dashboard">
            <div className="card__header">
              <p>Top Tags</p>
            </div>
            <div className="card__body">
              <Table
                headerData={topTags.head}
                bodyData={topTags.body}
                renderHeader={(item, index) => renderTagHead(item, index)}
                renderBody={(item, index) => renderTagBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/tag">
                <Button>View All</Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-12">
          <div className="card card__dashboard">
            <div className="card__header">
              <p>Top Negative Videos</p>
            </div>
            <Chart
              options={{
                labels: tagNames,
                ...chartOption.options,
              }}
              series={[{ name: "Videos by tag", data: tagScanneds }]}
              type="bar"
              horizontal="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
