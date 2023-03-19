import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import {getListVideo} from "../redux/actions/VideoAction"
import StatusCard from "../components/status-card/StatusCard";
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";
import statusCards from "../assets/JsonData/status-card-data.json";
import tagList from "../assets/JsonData/tag-data.json";
import sourceList from "../assets/JsonData/source-data.json";


const chartOption = {
  series: [],
  options: {
      chart: {
          type: 'polarArea',
      },
      stroke: {
          colors: ['#fff']
      },
      fill: {
          opacity: 0.8
      },
      responsive: [{
          breakpoint: 480,
          options: {
              chart: {
                  width: 200
              },
              legend: {
                  position: 'bottom'
              }
          }
      }]
  },
};
const topCustomers = {
  head: ["Name", "Scanned Contents"],
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
const renderCustomerHead = (item, index) => <th key={index}>{item}</th>;
const renderCustomerBody = (item, index) => ( 
  <tr key={index}>
    <td>{item.name}</td>
    <td>{item.scanned}</td>
  </tr>
)
const latestOrders = {
  header: ["name", "scanned contents", "type", "URL"],
  body: [
    {
      name: "VTV24",
      scanned: "7.101",
      type: "danger",
      url: "https://www.youtube.com/c/vtv24",
    },
    {
      name: "Việt Tân",
      scanned: "2.896",
      type: "danger",
      url: "https://www.youtube.com/c/VietTan",
    },
    {
      name: "RFA Tiếng Việt",
      scanned: "1.196",
      type: "danger",
      url: "https://www.youtube.com/user/RFAVietnamese",
    },
    {
      name: "BBC News Tiếng Việt",
      scanned: "1.196",
      type: "danger",
      url: "https://www.youtube.com/c/bbctiengviet",
    },
    {
      name: "TRÍ TUỆ TỎA SÁNG",
      scanned: "652",
      type: "primary",
      url: "https://www.facebook.com/hocvienkythuat",
    },
  ],
};
const renderOrderHead = (item, index) => <th key={index}>{item}</th>;
const renderOrderBody = (item, index) => (
  <tr key="index">
    <td>{item.name}</td>
    <td>{item.scanned}</td>
    <td><div className="flex-div" style={{"justifyContent":"center"}}><Badge className="text-bold" type={item.type} clickable={"none"} content={item.type === "danger" ? "Youtube channel" : "Facebook fanpage"}/></div></td>
    <td><a href={item.url}>{item.url}</a></td>
  </tr>
);

const Dashboard = () => {
  const dispatch = useDispatch();
  const ThemeReducer = useSelector(state => state.theme.mode);
  const videoList = useSelector((state)=> state.videoList)
  const {loading,videos,error} = videoList
  console.log(videoList)
  const [tagScanneds, setTagScanneds] = useState([]);
  const [tagNames, setTagNames] = useState([]);
  const [sourceScanneds, setSourceScanneds] = useState([]);
  const [sourceNames, setSourceNames] = useState([]);
  useEffect(() => {
      let tagscanned_list = [];
      let tagname_list = [];
      let sourcescanned_list = [];
      let sourcename_list = [];
      tagList.map((tag, index) => {
        tagscanned_list = [...tagscanned_list,tag["scanned"]];
        tagname_list = [...tagname_list, tag["name"]];
      });
      sourceList.map((source, index) => {
        sourcescanned_list = [...sourcescanned_list,source["scanned"]];
        sourcename_list = [...sourcename_list, source["name"]];
      });
      setTagScanneds(tagscanned_list);
      setTagNames(tagname_list);
      setSourceScanneds(sourcescanned_list);
      setSourceNames(sourcename_list);
      dispatch(getListVideo())
  }, [dispatch]);

  return (
    <div>
      <p style={{"fontSize":"24px"}}>Active Sources</p>
      <div className="header">
      </div>
      <div className="row">
          {statusCards.map((item, index) => (
            <div className="col-3 col-md-6 col-sm-12" key={index}>
              <StatusCard
                icon={item.icon}
                title={item.title}
                count={item.count}
                new={item.new}
              />
            </div>
          ))}
        
      </div>
      <div className="row">
      <div className="col-6 col-md-12">
          <div className="card full-height">
              <Chart
                  options={ {labels:tagNames,  ...chartOption.options}}
                  series={tagScanneds}
                  type='polarArea'
              />
          </div>
        </div>
        <div className="col-6 col-md-12">
          <div className="card full-height">
            {console.log(sourceScanneds)}
              <Chart
                  options={ {labels:sourceNames,  ...chartOption.options}}
                  series={sourceScanneds}
                  type='polarArea'
              />
          </div>
        </div>
        </div>
      <div className="row">
        <div className="col-4 col-md-12">
          <div className="card">
            <div className="card__header">
              <p style={{"fontSize":"16px"}}>Top Tags</p>
            </div>
            <div className="card__body">
              <Table
                headerData={topCustomers.head}
                bodyData={topCustomers.body}
                renderHeader={(item, index) => renderCustomerHead(item, index)}
                renderBody={(item, index) => renderCustomerBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">View all</Link>
            </div>
          </div>
        </div>
        <div className="col-8 col-md-12">
          <div className="card">
            <div className="card__header">
              <p style={{"fontSize":"16px"}}>Top Sources</p>

            </div>
            <div className="card__body">
              <Table
                headerData={latestOrders.header}
                bodyData={latestOrders.body}
                renderHeader={(item, index) => renderOrderHead(item, index)}
                renderBody={(item, index) => renderOrderBody(item, index)}
              />
            </div>
            <div className="card__footer">
              <Link to="/">View all</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
