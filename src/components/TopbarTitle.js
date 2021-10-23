import React from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";

TopbarTitle.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.string,
  hasDropdown: PropTypes.bool,
  hasCreate: PropTypes.bool,
};

TopbarTitle.defaultProps = {
  classes: "col-12",
  hasDropdown: false,
  hasCreate: false,
};

function TopbarTitle({ title, classes, hasDropdown, hasCreate }) {
  return (
    <div className={classes}>
      <div className="box">
        <div className="topbar">
          <div className="topbar-item topbar-title">
            <h2>{title}</h2>
          </div>
          {hasDropdown && (
            <div className="topbar-item dropdown-wrap">
              <Dropdown>
                <Dropdown.Toggle>Event-15</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/">Event-14</Dropdown.Item>
                  <Dropdown.Item href="/">Event-12</Dropdown.Item>
                  <Dropdown.Item href="/">Event-13</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
          {hasCreate && (
            <div className="topbar-item add-item">
              <button className="btn btn-primary">Create</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopbarTitle;
