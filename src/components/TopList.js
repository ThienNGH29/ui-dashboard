import PropTypes from "prop-types";
import React from "react";
import { BsNewspaper } from "react-icons/bs";

TopList.propTypes = {
  classes: PropTypes.string,
  title: PropTypes.string.isRequired,
};

TopList.defaultProps = {
  classes: "col-12 col-lg-4",
};

function TopList({ classes, title }) {
  return (
    <div className={classes}>
      <div className="box">
        <div className="box-header">
          <h3>{title}</h3>
          <a href="/" className="export-link">
            <BsNewspaper />
            Export
          </a>
        </div>
        <div className="top-list">
          <div className="top-list-item">
            <div className="avatar-wrap">
              <span>RA</span>
              <p>Viatick</p>
            </div>
            <p className="info">288 visitors</p>
          </div>
          <div className="top-list-item">
            <div className="avatar-wrap">
              <span>RA</span>
              <p>Viatick</p>
            </div>
            <p className="info">288 visitors</p>
          </div>
          <div className="top-list-item">
            <div className="avatar-wrap">
              <span>RA</span>
              <p>Viatick</p>
            </div>
            <p className="info">288 visitors</p>
          </div>
          <div className="top-list-item">
            <div className="avatar-wrap">
              <span>RA</span>
              <p>Viatick</p>
            </div>
            <p className="info">288 visitors</p>
          </div>
          <div className="top-list-item">
            <div className="avatar-wrap">
              <span>RA</span>
              <p>Viatick</p>
            </div>
            <p className="info">288 visitors</p>
          </div>
          <div className="top-list-item">
            <div className="avatar-wrap">
              <span>RA</span>
              <p>Viatick</p>
            </div>
            <p className="info">288 visitors</p>
          </div>
          <div className="top-list-item">
            <div className="avatar-wrap">
              <span>RA</span>
              <p>Viatick</p>
            </div>
            <p className="info">288 visitors</p>
          </div>
          <div className="top-list-item">
            <div className="avatar-wrap">
              <span>RA</span>
              <p>Viatick</p>
            </div>
            <p className="info">288 visitors</p>
          </div>
          <div className="top-list-item">
            <div className="avatar-wrap">
              <span>RA</span>
              <p>Viatick</p>
            </div>
            <p className="info">288 visitors</p>
          </div>
          <div className="top-list-item">
            <div className="avatar-wrap">
              <span>RA</span>
              <p>Viatick</p>
            </div>
            <p className="info">288 visitors</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopList;
