import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

import Badge from "../components/badge/Badge";
import Table from "../components/table/Table";

import contentList from "../assets/JsonData/content-data.json";
import sourceList from "../assets/JsonData/source-data.json";
import "./Pages.css";

const chartOption2 = {
  series: [
    {
      data: [
        1271, 1051, 2163, 1235, 1271, 1581, 2163, 1235, 3012, 1851, 2163, 1271,
      ],
    },
  ],
  options: {
    chart: {
      type: "area",
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
      ],
    },
    title: {
      text: "Monthly Reactives",
    },
    grid: {
      show: false,
    },
  },
};

const contentTableHead = ["#", "url", "content", "type", "view details"];

const SourceInfo = () => {
  const { sourceid } = useParams();

  const [sourceDetail, setSourceDetail] = useState({});

  const ThemeReducer = useSelector((state) => state.theme.mode);

  useEffect(() => {
    const getDetail = async () => {
      setSourceDetail(
        sourceList.find((source) => source.id.toString() === sourceid)
      );
    };
    getDetail();
  }, [sourceid]);

  const history = useHistory();

  const viewContentDetails = (videoid) => history.push("/video/" + videoid);

  const renderContentHead = (item, index) => <th key={index}>{item}</th>;

  const renderContentBody = (item, index) => (
    <tr key={index}>
      <td>{item._id}</td>
      <td>
        <a href={item.video_link}>{item.video_link}</a>
      </td>
      <td style={{ width: "50%" }}>
        <div className="td-content">
          <span>{item.video_content}</span>
        </div>
      </td>
      <td>
        <div className="flex-div">
          <Badge
            className="text-bold"
            type={
              item.video_type === 2
                ? "danger"
                : item.video_type === 1
                ? "success"
                : "primary"
            }
            clickable={"none"}
            content={
              item.video_type === 2
                ? "Tiêu cực"
                : item.video_type === 1
                ? "Tích cực"
                : "Trung tính"
            }
          />
        </div>
      </td>
      <td>
        <div className="flex-div">
          <button
            onClick={() => viewContentDetails(item._id)}
            className="btn btn-view"
          >
            <i className="bx bx-search-alt mr-0-5"></i>Details
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div>
      <p className="section__header page-header">
        Source Manager / Source:{" "}
        <span className="tag-span">{sourceDetail.name}</span>
      </p>
      <div className="col-12">
        <div className="justify-div"></div>
        <div className="card row">
          <div className="col-4 col-md-12">
            <div className="card__body card__body-p">
              <p>
                Source ID:{" "}
                <span className="text-bold tag-span">{sourceDetail.id}</span>
              </p>
              <p>
                Source Name:{" "}
                <span className="text-bold tag-span">{sourceDetail.name}</span>
              </p>
              <p>
                Source URL:{" "}
                <span className="text-bold tag-span">
                  <a href={sourceDetail.url}>{sourceDetail.url}</a>
                </span>
              </p>
              <p>
                All Scanned Contents:{" "}
                <span className="text-bold tag-span">
                  {sourceDetail.scanned}
                </span>
              </p>
              <p>
                Scanned Contents In Last 1 Week:{" "}
                <span className="text-bold tag-span">11</span>
              </p>
              <p>
                Reactive In Last 1 Week:{" "}
                <span className="text-bold tag-span">
                  {sourceDetail.reactives}
                </span>
              </p>
            </div>
          </div>
          <div className="col-8 col-md-12">
            <div className="card-chart full-height col-12">
              <Chart
                options={
                  ThemeReducer === "theme-mode-dark"
                    ? {
                        ...chartOption2.options,
                        theme: { mode: "dark" },
                        background: "#2d2d2d",
                      }
                    : {
                        ...chartOption2.options,
                        theme: { mode: "light" },
                      }
                }
                series={chartOption2.series}
                height="120%"
                type="area"
              />
            </div>
          </div>
        </div>
        <div className="card__header">
          <p>Scanned Contents</p>
        </div>
        <div className="card row">
          <div className="col-12">
            <div className="card__body">
              <Table
                limit="10"
                headerData={contentTableHead}
                bodyData={contentList}
                renderHeader={(item, index) => renderContentHead(item, index)}
                renderBody={(item, index) => renderContentBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceInfo;
