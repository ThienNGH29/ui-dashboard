import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { BsPencil, BsTrash } from "react-icons/bs";
import { Offcanvas } from "react-bootstrap";

function RightEditmodal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="btn edit-button">
          <span>...</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={handleShow}>
            <BsPencil className="me-2" />
            <span>Edit</span>
          </Dropdown.Item>
          <Dropdown.Item>
            <BsTrash className="me-2" />
            <span>Delete</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="ml-1">Update Exhibitor</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <form>
            <div className="offcanvas-inner">
              <div className="mb-4 mx-1">
                <label className="form-label" htmlFor="edit-name">
                  Name<span className="text-danger">*</span>
                </label>
                <input
                  id="edit-name"
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-4 mx-1">
                <label className="form-label" htmlFor="edit-email">
                  Email<span className="text-danger">*</span>
                </label>
                <input
                  id="edit-email"
                  type="email"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-4 mx-1">
                <label className="form-label" htmlFor="edit-website">
                  Website
                </label>
                <input
                  id="edit-website"
                  type="text"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-4 mx-1">
                <label className="form-label" htmlFor="edit-industry">
                  Industry
                </label>
                <select id="edit-industry" className="form-select">
                  <option>Aerospace</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="mb-4 mx-1">
                <label className="form-label" for="formFile">
                  Brochure
                </label>
                <input
                  type="file"
                  id="formFile"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-4 mx-1">
                <label className="form-label" htmlFor="edit-password">
                  Password<span className="text-danger">*</span>
                </label>
                <input
                  id="edit-password"
                  type="password"
                  className="form-control"
                ></input>
              </div>
              <div className="mb-4 mx-1">
                <label className="form-label" htmlFor="edit-repassword">
                  Repeat Password<span className="text-danger">*</span>
                </label>
                <input
                  id="edit-repassword"
                  type="password"
                  className="form-control"
                ></input>
              </div>
            </div>
            <button type="submit" className="btn btn-info btn-block mt-3 mx-1">
              UPDATE
            </button>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default RightEditmodal;
