import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Badge from "../components/badge/Badge";
import Table from "../components/table/Table";

import contentList from "../assets/JsonData/content-data.json";
import sourceList from "../assets/JsonData/source-data.json";
import './Pages.css'


const contentTableHead = [
  "#",
  "type",
  "url",
  "content",
  "view details",
];
const SourceInfo = () => {
    const {sourceid} = useParams();
    const [sourceDetail, setSourceDetail] = useState({});
    useEffect(() => {
        const getDetail = async () => {
            setSourceDetail(sourceList.find(source => source.id.toString() === sourceid));
        }
        getDetail();
    }, []);
    const history = useHistory();
    const viewContentDetails = (videoid) => history.push('/video/' + videoid);
    const renderContentHead = (item, index) => <th key={index}>{item}</th>;
    const renderContentBody = (item, index) => (
      <tr key="index">
        <td>{item.id}</td>
        <td><div className="flex-div"><Badge className="text-bold" type={item.type} clickable={"none"} content={item.type === "danger" ? "Youtube video" : "Facebook post"}/></div></td>
        <td><a href={item.url}>{item.url}</a></td>
        <td className="td-content">{item.content}</td>
        <td><button onClick={() => viewContentDetails(item.id)} className="btn btn-view"><i className="bx bx-search-alt mr-0-5"></i>Details</button></td>
      </tr>
    );
    return (
        <div>
            <div className="justify-div">
                <p style={{"fontSize":"24px"}} className="page-header">Source Manager / Source: <span className="tag-span">{sourceDetail.name}</span></p>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__header">
                            <p style={{"fontSize":"20px"}}>Details</p>
                        </div>
                        <div className="card__body card__body-p">
                            <p>Source ID: <span className="text-bold tag-span">{sourceDetail.id}</span></p>
                            <p>Source Name: <span className="text-bold tag-span">{sourceDetail.name}</span></p>
                            <p>Source URL: <span className="text-bold tag-span"><a href={sourceDetail.url}>{sourceDetail.url}</a></span></p>
                            <p>All Scanned Contents: <span className="text-bold tag-span">{sourceDetail.scanned}</span></p>
                            <p>Scanned Contents In 1 Week: <span className="text-bold tag-span">11</span></p>
                        </div>
                    </div>
                </div>
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
        </div>
    );
};

export default SourceInfo;
