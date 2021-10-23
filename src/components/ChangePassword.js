import React from "react";
import PropTypes from "prop-types";
import { FaRegSave, FaExclamationCircle } from "react-icons/fa";

ChangePassword.propTypes = {
  classes: PropTypes.string,
};

ChangePassword.defaultProps = {
  classes: "col-12",
};

function ChangePassword({ classes }) {
  return (
    <div className={classes}>
      <div className="box lg-size">
        <div className="box-header">
          <div className="title-with-image">
            <div className="ico-wrap">
              <img src="/shield.png" alt="" />
            </div>
            <h2>Password Change</h2>
          </div>
        </div>
        <form>
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="form-floating mb-4">
                <input
                  id="current-password"
                  name="current-password"
                  type="password"
                  className="form-control"
                  placeholder="Current password"
                />
                <label for="current-password" className="form-label">
                  Current password
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="form-floating mb-4">
                <input
                  id="new-password"
                  name="new-password"
                  type="password"
                  className="form-control"
                  placeholder="New password"
                />
                <label for="new-password" className="form-label">
                  New password
                </label>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="form-floating mb-4">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="password"
                  className="form-control"
                  placeholder="Confirm new password"
                />
                <label for="confirm-password" className="form-label">
                  Confirm new password
                </label>
              </div>
            </div>
          </div>
          <div role="alert" className="alert alert-warning mt-2 py-4">
            <FaExclamationCircle className="me-2" />
            <span>Leave blank to leave unchanged.</span>
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

export default ChangePassword;
