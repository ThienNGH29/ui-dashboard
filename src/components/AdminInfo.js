import React from "react";
import PropTypes from "prop-types";
import { FaRegSave } from "react-icons/fa";

AdminInfo.propTypes = {
  classes: PropTypes.string,
};

AdminInfo.defaultProps = {
  classes: "col-12",
};

function AdminInfo({ classes }) {
  return (
    <div className={classes}>
      <div className="box lg-size">
        <div className="box-header">
          <div className="title-with-image">
            <div className="ico-wrap">
              <img src="/pencil.png" alt="" />
            </div>
            <h2>Event Overview</h2>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="form-floating mb-4">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
                <label for="first-name" className="form-label">
                  First name
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="form-floating mb-4">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
                <label for="last-name" className="form-label">
                  Last name
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="form-floating mb-4">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <label for="email" className="form-label">
                  Email
                </label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end pt-2 mb-4">
            <button
              type="button"
              className="btn btn-outline-primary custom-save-btn"
            >
              <FaRegSave className="me-2" />
              <span>Save</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminInfo;
