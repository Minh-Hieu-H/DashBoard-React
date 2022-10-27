import React from "react";

import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import { useSelector } from "react-redux";

import StatusCard from "../components/status-card/StatusCard";
import Table from "../components/table/Table";
import Badge from "../components/badge/Badge";
import statusCards from "../assets/JsonData/status-card-data.json";

const chartOption = {
  series: [
    {
      name: "Youtube Source",
      data: [12, 16, 4, 8, 21, 3, 2],
    },
    {
      name: "Facebook Source",
      data: [8, 6, 2, 6, 6, 1, 0],
    },
  ], // chart data
  options: {
    color: ["#ff0000", "#2d86ff"],
    chart: {
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
      ],
    },
    legend: {
      position: "top",
    },
    grid: {
      show: false,
    },
  }, // chart options
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
  const ThemeReducer = useSelector(state => state.ThemeReducer.mode)
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
      <div className="row">
        <div className="card card-chart full-height col-12">
          <Chart
            options={ThemeReducer==='theme-mode-dark'?
            {...chartOption.options, theme: {mode:"dark"}}
            : {
              ...chartOption.options, theme: {mode:"light"}
            }}
            series={chartOption.series}
            type="line"
            height="200%"
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
