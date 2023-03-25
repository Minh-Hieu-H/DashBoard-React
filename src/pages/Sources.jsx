import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal } from "antd";

import Table from "../components/table/Table";

import tagList from "../assets/JsonData/source-data.json";
import "./Pages.css";

const customerTableHead = [
  "#",
  "name",
  "scanned contents",
  "URL",
  "view details",
  "unfollow",
];

const Sources = () => {
  const history = useHistory();

  const viewDetails = (sourceid) => history.push("/source/" + sourceid);

  const renderHead = (item, index) => <th key={index}>{item}</th>;

  const renderBody = (item, index) => (
    <tr key={index}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.scanned}</td>
      <td>
        <a href={item.url}>{item.url}</a>
      </td>
      <td>
        <div className="flex-center">
          <button onClick={() => viewDetails(item.id)} className="btn btn-view">
            <i className="bx bx-search-alt mr-0-5"></i>Details
          </button>
        </div>
      </td>
      <td>
        <div className="flex-center">
          <button
            onClick={() => showModalDelete(item.id)}
            className="btn btn-delete"
          >
            <i className="bx bx-user-x mr-0-5"></i>Unfollow
          </button>
        </div>
      </td>
    </tr>
  );

  const [openAdd, setOpenAdd] = useState(false);

  const [openDelete, setOpenDelete] = useState(false);

  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModalAdd = () => {
    setOpenAdd(true);
  };

  const handleOkAdd = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenAdd(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancelAdd = () => {
    setOpenAdd(false);
  };

  const showModalDelete = () => {
    setOpenDelete(true);
  };

  const handleOkDelete = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpenDelete(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancelDelete = () => {
    setOpenDelete(false);
  };

  const currentMainColorVar =
    "var(--main-color-" + localStorage.getItem("colorMode").slice(12) + ")";

  const currentSecondColorVar =
    "var(--second-color-" + localStorage.getItem("colorMode").slice(12) + ")";

  return (
    <div>
      <div className="justify-div">
        <p className="section__header">Source Manager</p>
        <button className="btn btn-add" onClick={showModalAdd}>
          <i className="bx bx-plus mr-0-5"></i>Add Source
        </button>
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
        title="Add a new source"
        centered
        open={openAdd}
        onOk={handleOkAdd}
        confirmLoading={confirmLoading}
        onCancel={handleCancelAdd}
        okText="Add"
        okButtonProps={{
          className: "ok-btn",
          style: {
            backgroundColor: currentSecondColorVar,
          },
          onMouseEnter: (e) =>
            (e.target.style.backgroundColor = currentMainColorVar),
          onMouseLeave: (e) =>
            (e.target.style.backgroundColor = currentSecondColorVar),
        }}
        cancelButtonProps={{
          className: "cancel-btn"
        }}
      >
        <div className="modalBody">
          <label className="modalLabel">Source URL:</label>
          <input className="modalInput" type="text"></input>
        </div>
      </Modal>
      <Modal
        centered
        open={openDelete}
        onOk={handleOkDelete}
        confirmLoading={confirmLoading}
        onCancel={handleCancelDelete}
        okText="Unfollow"
        okButtonProps={{
          className: "ok-btn",
          style: {
            backgroundColor: "#959595"
          },
          onMouseEnter: (e) => (e.target.style.backgroundColor = "#6b6a6a"),
          onMouseLeave: (e) => (e.target.style.backgroundColor = "#959595"),
        }}
        cancelButtonProps={{
          className: "cancel-btn"
        }}
      >
        <div className="modalBody">
          <p>
            Are you sure you want to unfollow this source?
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Sources;
