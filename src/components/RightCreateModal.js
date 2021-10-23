import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";

function RightCreateModal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="topbar-item add-item" onClick={handleShow}>
        <button className="btn btn-primary">Create</button>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Create Exhibitor</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form>
            <div className="offcanvas-inner">
              <div className="mb-3">
                <label className="form-label" htmlFor="create-name">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  id="create-name"
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="create-email">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  id="create-email"
                  type="email"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="create-website">
                  Website
                </label>
                <input
                  id="create-website"
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="create-industry">
                  Website
                </label>
                <select id="create-industry" className="form-select">
                  <option>Aerospace</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="create-password">
                  Password<span className="text-danger">*</span>
                </label>
                <input
                  id="create-password"
                  type="password"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="create-repassword">
                  Repeat Password<span className="text-danger">*</span>
                </label>
                <input
                  id="create-repassword"
                  type="password"
                  className="form-control"
                ></input>
              </div>
            </div>
            <button type="submit" className="btn btn-info w-100 mt-3">
              CREATE
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RightCreateModal;
