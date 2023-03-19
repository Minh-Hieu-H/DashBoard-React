import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import StatusCard from "../components/status-card/StatusCard";
import Table from "../components/table/Table";

import statusCards from "../assets/JsonData/status-card-data.json";
import last7Tag from "../assets/JsonData/last-7-tag.json";
import last7Reactive from "../assets/JsonData/last-7-reactive.json";
import Button from "../components/button/Button";


const chartOption = {
  options: {
    colors: "#ff0000",
    xaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
      },
    },
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
);

const latestOrders = {
  header: ["name", "scanned contents", "URL"],
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

const renderOrderHead = (item, index) => <th key={index}>{item}</th>;

const renderOrderBody = (item, index) => (
  <tr key="index">
    <td>{item.name}</td>
    <td>{item.scanned}</td>
    <td>
      <a href={item.url}>{item.url}</a>
    </td>
  </tr>
);

const Dashboard = () => {
  // defined state
  const [tagScanneds, setTagScanneds] = useState([]);

  const [tagNames, setTagNames] = useState([]);

  const [sourceScanneds, setSourceScanneds] = useState([]);

  const [sourceNames, setSourceNames] = useState([]);

  useEffect(() => {
    let tagscanned_list = [];
    let tagname_list = [];
    let sourcescanned_list = [];
    let sourcename_list = [];
    last7Tag.map((tag, index) => {
      tagscanned_list = [...tagscanned_list, tag["count"]];
      tagname_list = [...tagname_list, tag["weekday"]];
    });
    last7Reactive.map((source, index) => {
      sourcescanned_list = [...sourcescanned_list, source["count"]];
      sourcename_list = [...sourcename_list, source["weekday"]];
    });
    setTagScanneds(tagscanned_list);
    setTagNames(tagname_list);
    setSourceScanneds(sourcescanned_list);
    setSourceNames(sourcename_list);
  }, []);

  return (
    <div>
      <p style={{ fontSize: "24px" }}>Active Channels</p>
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

      <p style={{ fontSize: "24px" }}>Tag Statistics</p>
      <div
        className="row"
        style={{ alignItems: "stretch", marginBottom: "30px" }}
      >
        <div className="col-6 col-md-12">
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div className="card__header">
              <p>Top Tags</p>
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
              <Button>
                <Link to="/tag">View All</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-12">
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div className="card__header">
              <p>Captured Events on Last 7 days</p>
            </div>
            <Chart
              options={{ labels: tagNames, ...chartOption.options }}
              series={[{ name: "Videos by tag", data: tagScanneds }]}
              type="bar"
            />
          </div>
        </div>
      </div>

      <p style={{ fontSize: "24px" }}>Source Statistics</p>
      <div
        className="row"
        style={{ alignItems: "stretch", marginBottom: "30px" }}
      >
        <div className="col-6 col-md-12">
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div className="card__header">
              <p>Top Sources</p>
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
              <Button>
                <Link to="/source">View All</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-12">
          <div
            className="card"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div className="card__header">
              <p>Reactive on Last 7 days</p>
            </div>
            <Chart
              options={{ labels: sourceNames, ...chartOption.options }}
              series={[
                { name: "Reactive Bar", data: sourceScanneds, type: "bar" },
              ]}
              type="bar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
