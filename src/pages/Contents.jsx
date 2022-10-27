import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import Badge from "../components/badge/Badge";
import Table from "../components/table/Table";
import contentList from "../assets/JsonData/content-data.json";
import './Pages.css'
import 'antd/dist/antd.css';

const contentTableHead = [
    "#",
    "type",
    "url",
    "content",
    "view details",
  ];
const Contents = () => {
    const history = useHistory();
    const viewContentDetails = (item) => history.push('/contentinfo');
    const renderContentHead = (item, index) => <th key={index}>{item}</th>;
    const renderContentBody = (item, index) => (
      <tr key="index">
        <td>{item.id}</td>
        <td><div className="flex-div"><Badge className="text-bold" type={item.type} clickable={"none"} content={item.type === "danger" ? "Youtube video" : "Facebook post"}/></div></td>
        <td><a href={item.url}>{item.url}</a></td>
        <td className="td-content">{item.content}</td>
        <td><button onClick={viewContentDetails} className="btn btn-view"><i className="bx bx-search-alt mr-0-5"></i>Details</button></td>
      </tr>
    );
    return (
        <>
            <div className="justify-div">
                <p style={{"fontSize":"24px"}}>Content Manager</p>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <p style={{"fontSize":"20px"}}>Scanned Contents:</p>
                        </div>
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
        </>
    );
};

export default Contents;
