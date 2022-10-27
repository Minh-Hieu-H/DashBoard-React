import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from 'antd';

import Table from "../components/table/Table";
import tagList from "../assets/JsonData/tag-data.json";
import './Pages.css'
import 'antd/dist/antd.css';

const customerTableHead = [
  "#",
  "name",
  "scanned contents",
  "view details",
  "edit",
  "delete",
];
const Tags = () => {
  const history = useHistory();
  const viewDetails = () => history.push('/taginfo');
  const renderHead = (item, index) => (
    <th key={index}>{item}</th>
  )
  const renderBody = (item, index) => (
  <tr key={index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.scanned}</td>
    <td><div className="flex-center"><button onClick={viewDetails} className="btn btn-view"><i className="bx bx-search-alt mr-0-5"></i>Details</button></div></td>
    <td><div className="flex-center"><button className="btn btn-edit"><i className="bx bx-edit mr-0-5"></i>Edit</button></div></td>
    <td><div className="flex-center"><button className="btn btn-delete"><i className="bx bx-trash mr-0-5"></i>Delete</button></div></td>
  </tr>
  );
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="justify-div">
        <p style={{"fontSize":"24px"}}>Tag Manager</p>
        <button className="btn btn-add" onClick={showModal}><i className="bx bx-plus mr-0-5"></i>Add Tag</button>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              <Table
                limit="10"
                headerData={customerTableHead}
                bodyData={tagList}
                renderHeader={(item, index) => renderHead(item, index)}
                renderBody={(item, index) => renderBody(item, index)}
              />
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Add a new tag"
        centered
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okText="Add"
        okButtonProps={{ style: { "fontSize":"16px", "padding":"0 10px", "borderRadius":"5px" } }}
        cancelButtonProps={{ style: { "fontSize":"16px", "padding":"0 10px", "borderRadius":"5px" } }}
      >
        <div className="modalBody">
          <label className="modalLabel">Tag Name:</label>
          <input className="modalInput" type="text"></input>
        </div>
      </Modal>
    </>
  );
};

export default Tags;
